import BluetoothStateManager from "react-native-bluetooth-state-manager";

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
}

export { BluetoothService, BluetoothStates };
