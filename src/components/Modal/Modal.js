import React from "react";
import { Modal, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../Text";

const RNModal = (props) => {
    const { isOpen = false, onClose, children } = props;

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.cross}>
                    <Text color={AppColors.White}>X</Text>
                </TouchableOpacity>
                <View style={[styles.modalView]}>{children}</View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    cross: {
        backgroundColor: AppColors.PrimaryBlue,
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
        zIndex: 2
    },
    modalView: {
        zIndex: 2,
        flex: 1
    },
    overlay: {
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 1
    }
});

export default RNModal;
