package app.littletakhti;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.print.PageRange;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintDocumentInfo;
import android.print.PrintManager;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

/** Prints a worksheet PDF that is already saved on the device, using Android's print screen
 *  (printers on the same Wi-Fi, or "Save as PDF"). */
@CapacitorPlugin(name = "LtPrint")
public class LtPrintPlugin extends Plugin {

    @PluginMethod
    public void printPdf(PluginCall call) {
        String path = call.getString("path");
        final String name = call.getString("name", "Little Takhti worksheet");
        if (path == null) {
            call.reject("No file");
            return;
        }
        final File file = new File(path.startsWith("file:") ? Uri.parse(path).getPath() : path);
        if (!file.exists()) {
            call.reject("File not found");
            return;
        }
        getActivity().runOnUiThread(() -> {
            try {
                PrintManager pm = (PrintManager) getActivity().getSystemService(Context.PRINT_SERVICE);
                PrintDocumentAdapter adapter = new PrintDocumentAdapter() {
                    @Override
                    public void onLayout(PrintAttributes oldAttrs, PrintAttributes newAttrs, CancellationSignal cancel,
                                         LayoutResultCallback callback, Bundle extras) {
                        if (cancel.isCanceled()) {
                            callback.onLayoutCancelled();
                            return;
                        }
                        PrintDocumentInfo info = new PrintDocumentInfo.Builder(name + ".pdf")
                            .setContentType(PrintDocumentInfo.CONTENT_TYPE_DOCUMENT)
                            .build();
                        callback.onLayoutFinished(info, true);
                    }

                    @Override
                    public void onWrite(PageRange[] pages, ParcelFileDescriptor dest, CancellationSignal cancel,
                                        WriteResultCallback callback) {
                        try (InputStream in = new FileInputStream(file);
                             OutputStream out = new FileOutputStream(dest.getFileDescriptor())) {
                            byte[] buf = new byte[16384];
                            int n;
                            while ((n = in.read(buf)) > 0) {
                                if (cancel.isCanceled()) {
                                    callback.onWriteCancelled();
                                    return;
                                }
                                out.write(buf, 0, n);
                            }
                            callback.onWriteFinished(new PageRange[] { PageRange.ALL_PAGES });
                        } catch (Exception e) {
                            callback.onWriteFailed(e.getMessage());
                        }
                    }
                };
                PrintAttributes attrs = new PrintAttributes.Builder()
                    .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
                    .build();
                pm.print(name, adapter, attrs);
                call.resolve();
            } catch (Exception e) {
                call.reject(e.getMessage());
            }
        });
    }
}
