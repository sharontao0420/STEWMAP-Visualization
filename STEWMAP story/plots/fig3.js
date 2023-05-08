
window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("6bd1d6d1-f446-4f86-87ff-c0e4a7a34ca9")) {
    Plotly.newPlot(
        "6bd1d6d1-f446-4f86-87ff-c0e4a7a34ca9",
        [
            {
                name: "Environment",
                visible: true,
                x: [
                    "Bronx",
                    "Brooklyn",
                    "Manhattan",
                    "Queens",
                    "Staten Island",
                ],
                y: [11.0, 32.0, 37.0, 22.0, 3.0],
                type: "bar",
                xaxis: "x",
                yaxis: "y",
            },
            {
                name: "Nitrogen Dioxide (NO2)",
                visible: true,
                x: [
                    "Bronx",
                    "Brooklyn",
                    "Manhattan",
                    "Queens",
                    "Staten Island",
                ],
                y: [-19.35, -18.46, -24.55, -17.85, -13.37],
                type: "bar",
                xaxis: "x",
                yaxis: "y",
            },
            {
                name: "Fine Particulate Matter(PM 2.5)",
                visible: false,
                x: [
                    "Bronx",
                    "Brooklyn",
                    "Manhattan",
                    "Queens",
                    "Staten Island",
                ],
                y: [-7.72, -7.52, -8.72, -7.19, -6.81],
                type: "bar",
                xaxis: "x",
                yaxis: "y",
            },
        ],
        {
            template: {
                data: {
                    bar: [
                        {
                            error_x: { color: "#2a3f5f" },
                            error_y: { color: "#2a3f5f" },
                            marker: {
                                line: { color: "#E5ECF6", width: 0.5 },
                                pattern: {
                                    fillmode: "overlay",
                                    size: 10,
                                    solidity: 0.2,
                                },
                            },
                            type: "bar",
                        },
                    ],
                    scattergeo: [
                        {
                            type: "scattergeo",
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    scatterpolar: [
                        {
                            type: "scatterpolar",
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    histogram: [
                        {
                            marker: {
                                pattern: {
                                    fillmode: "overlay",
                                    size: 10,
                                    solidity: 0.2,
                                },
                            },
                            type: "histogram",
                        },
                    ],
                    scattergl: [
                        {
                            type: "scattergl",
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    scatter3d: [
                        {
                            type: "scatter3d",
                            line: { colorbar: { outlinewidth: 0, ticks: "" } },
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    scattermapbox: [
                        {
                            type: "scattermapbox",
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    scatterternary: [
                        {
                            type: "scatterternary",
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    scattercarpet: [
                        {
                            type: "scattercarpet",
                            marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                        },
                    ],
                    carpet: [
                        {
                            aaxis: {
                                endlinecolor: "#2a3f5f",
                                gridcolor: "white",
                                linecolor: "white",
                                minorgridcolor: "white",
                                startlinecolor: "#2a3f5f",
                            },
                            baxis: {
                                endlinecolor: "#2a3f5f",
                                gridcolor: "white",
                                linecolor: "white",
                                minorgridcolor: "white",
                                startlinecolor: "#2a3f5f",
                            },
                            type: "carpet",
                        },
                    ],
                    table: [
                        {
                            cells: {
                                fill: { color: "#EBF0F8" },
                                line: { color: "white" },
                            },
                            header: {
                                fill: { color: "#C8D4E3" },
                                line: { color: "white" },
                            },
                            type: "table",
                        },
                    ],
                    barpolar: [
                        {
                            marker: {
                                line: { color: "#E5ECF6", width: 0.5 },
                                pattern: {
                                    fillmode: "overlay",
                                    size: 10,
                                    solidity: 0.2,
                                },
                            },
                            type: "barpolar",
                        },
                    ],
                    pie: [{ automargin: true, type: "pie" }],
                },
                layout: {
                    autotypenumbers: "strict",
                    colorway: [
                        "#636efa",
                        "#EF553B",
                        "#00cc96",
                        "#ab63fa",
                        "#FFA15A",
                        "#19d3f3",
                        "#FF6692",
                        "#B6E880",
                        "#FF97FF",
                        "#FECB52",
                    ],
                    font: { color: "#2a3f5f" },
                    hovermode: "closest",
                    hoverlabel: { align: "left" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: {
                        bgcolor: "#E5ECF6",
                        angularaxis: {
                            gridcolor: "white",
                            linecolor: "white",
                            ticks: "",
                        },
                        radialaxis: {
                            gridcolor: "white",
                            linecolor: "white",
                            ticks: "",
                        },
                    },
                    ternary: {
                        bgcolor: "#E5ECF6",
                        aaxis: {
                            gridcolor: "white",
                            linecolor: "white",
                            ticks: "",
                        },
                        baxis: {
                            gridcolor: "white",
                            linecolor: "white",
                            ticks: "",
                        },
                        caxis: {
                            gridcolor: "white",
                            linecolor: "white",
                            ticks: "",
                        },
                    },
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                    },
                    xaxis: {
                        gridcolor: "white",
                        linecolor: "white",
                        ticks: "",
                        title: { standoff: 15 },
                        zerolinecolor: "white",
                        automargin: true,
                        zerolinewidth: 2,
                    },
                    yaxis: {
                        gridcolor: "white",
                        linecolor: "white",
                        ticks: "",
                        title: { standoff: 15 },
                        zerolinecolor: "white",
                        automargin: true,
                        zerolinewidth: 2,
                    },
                    scene: {
                        xaxis: {
                            backgroundcolor: "#E5ECF6",
                            gridcolor: "white",
                            linecolor: "white",
                            showbackground: true,
                            ticks: "",
                            zerolinecolor: "white",
                            gridwidth: 2,
                        },
                        yaxis: {
                            backgroundcolor: "#E5ECF6",
                            gridcolor: "white",
                            linecolor: "white",
                            showbackground: true,
                            ticks: "",
                            zerolinecolor: "white",
                            gridwidth: 2,
                        },
                        zaxis: {
                            backgroundcolor: "#E5ECF6",
                            gridcolor: "white",
                            linecolor: "white",
                            showbackground: true,
                            ticks: "",
                            zerolinecolor: "white",
                            gridwidth: 2,
                        },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    annotationdefaults: {
                        arrowcolor: "#2a3f5f",
                        arrowhead: 0,
                        arrowwidth: 1,
                    },
                    geo: {
                        bgcolor: "white",
                        landcolor: "#E5ECF6",
                        subunitcolor: "white",
                        showland: true,
                        showlakes: true,
                        lakecolor: "white",
                    },
                    title: { x: 0.05 },
                    mapbox: { style: "light" },
                },
            },
            xaxis: { anchor: "y", domain: [0.0, 0.94] },
            yaxis: { anchor: "x", domain: [0.0, 1.0] },
            yaxis2: { anchor: "x", overlaying: "y", side: "right" },
            updatemenus: [
                {
                    buttons: [
                        {
                            args: [{ visible: [true, true, false] }],
                            label: "Nitrogen Dioxide (NO2)",
                            method: "update",
                        },
                        {
                            args: [{ visible: [true, false, true] }],
                            label: "Fine Particulate Matter(PM 2.5)",
                            method: "update",
                        },
                    ],
                    direction: "down",
                    showactive: true,
                    x: 0.2,
                    xanchor: "center",
                    y: 1.15,
                    yanchor: "top",
                },
            ],
            title: { text: "" },
            barmode: "relative",
        },
        { responsive: true }
    );
}
