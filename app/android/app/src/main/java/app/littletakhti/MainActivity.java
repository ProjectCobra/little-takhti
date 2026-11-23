package app.littletakhti;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(LtPrintPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
