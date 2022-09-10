import BluetoothStateManager from "react-native-bluetooth-state-manager";
import { BleManager } from "react-native-ble-plx";
import Snackbar from "react-native-snackbar";

const Ble = new BleManager();

const BluetoothStates = {
    PoweredOn: "PoweredOn",
    PoweredOff: "PoweredOff"
};

class BluetoothService {
    static getState() {
        return BluetoothStateManager.getState()
            .then((bluetoothState) => {
                return Promise.resolve(bluetoothState);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

    static async scanNConnect() {
        return new Promise((resolve, reject) => {
            return Ble.startDeviceScan(null, null, async (error, device) => {
                if (error) {
                    Snackbar.show({
                        text: error,
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: "red"
                    });
                    return;
                }

                Ble.stopDeviceScan();

                Snackbar.show({
                    text: "Device found :" + device.id,
                    duration: Snackbar.LENGTH_SHORT
                });

                try {
                    const res = await device.connect();
                    const result = await res.discoverAllServicesAndCharacteristics();
                    resolve(true);
                } catch (err) {
                    Snackbar.show({
                        text: err.message,
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: "red"
                    });

                    reject(err.message);
                }
            });
        });
    }
}

export { BluetoothService, BluetoothStates };
