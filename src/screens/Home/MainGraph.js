import React, { useCallback } from "react";
import { Dimensions } from "react-native";
import { BarGraph } from "../../components/BarGraph";

import { AppColors } from "../../style";

const MainGraph = (props) => {
    const { data, labels, subLabels } = props;

    const renderGraph = useCallback(() => {
        return (
            <BarGraph
                data={data}
                labels={labels}
                subLabels={subLabels}
                width={Dimensions.get("window").width - 35}
                height={Dimensions.get("window").width / 7 + 215}
                //barRadius={5}
                barColor={AppColors.DarkBlue}
                barWidthPercentage={0.4}
                baseConfig={{
                    hasXAxisBackgroundLines: true,
                    hasYAxisLabels: true,
                    hasXAxisLabels: false,
                    xAxisBackgroundLineStyle: {
                        strokeWidth: 0.8,
                        color: "#D3D3D3"
                    }
                }}
                extraHeight={30}
                style={{
                    paddingVertical: 10,
                    alignSelf: "center",
                    marginTop: 20
                }}
            />
        );
    }, [data, labels, subLabels]);

    return renderGraph();
};

export default MainGraph;
