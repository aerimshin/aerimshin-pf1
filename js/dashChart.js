document.addEventListener("DOMContentLoaded", function () {
    function renderCharts() {
        // CPU 차트 생성
        Highcharts.chart('cpuChart', {
            chart: {
                type: 'column',
                backgroundColor: 'rgba(0,0,0,0)',
                style: {
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Server1', 'Server2', 'Server3', 'Server4', 'Server5'],
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    borderRadius: 1
                }
            },
            credits: {
                enabled: false  // Highcharts 로고 및 링크 제거
            },
            series: [{
                name: 'CPU Usage',
                data: [70, 60, 90, 50, 80],
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, '#E12E0D'],
                        [1, '#731D0D']
                    ]
                }
            }]
        });

        // Memory 차트 생성
        Highcharts.chart('memChart', {
            chart: {
                type: 'column',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Server1', 'Server2', 'Server3', 'Server4', 'Server5'],
                labels: {
                    style: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)',
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    borderRadius: 1
                }
            },
            credits: {
                enabled: false  // Highcharts 로고 및 링크 제거
            },
            series: [{
                name: 'Memory Usage',
                data: [80, 70, 50, 30, 90],
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, '#0086D1'],
                        [1, '#003350']
                    ]
                }
            }]
        });


        // 백본1 차트 (Backbone 1 Line Chart)
        Highcharts.chart('backboneChart1', {
            chart: {
                type: 'areaspline',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,

                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false  // Highcharts 로고 및 링크 제거
            },
            series: [{
                name: 'OUT',
                data: [230, 140, 70, 310, 160, 280, 200, 220, 240, 360, 200, 130],
                lineColor: '#0253A5',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(2,83,165,1)'],
                        [1, 'rgba(2,83,165,0.3)']
                    ]
                },
            }, {
                name: 'IN',
                data: [50, 60, 210, 190, 120, 170, 140, 380, 190, 30, 60, 90],
                lineColor: '#EC6B01',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(236,107,1,1)'],
                        [1, 'rgba(236,107,1,0.3)']
                    ]
                },
            }]
        });

        // 백본2 차트 (Backbone 2 Line Chart)
        Highcharts.chart('backboneChart2', {
            chart: {
                type: 'areaspline',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,

                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false  // Highcharts 로고 및 링크 제거
            },
            series: [{
                name: 'OUT',
                data: [130, 40, 170, 110, 260, 280, 200, 220, 140, 260, 200, 230],
                lineColor: '#0253A5',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(2,83,165,1)'],
                        [1, 'rgba(2,83,165,0.3)']
                    ]
                },
            }, {
                name: 'IN',
                data: [80, 60, 110, 90, 120, 170, 140, 180, 190, 230, 160, 190],
                lineColor: '#EC6B01',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(236,107,1,1)'],
                        [1, 'rgba(236,107,1,0.3)']
                    ]
                },
            }]
        });

        // 인터넷 차트1 (Internet 1 Line Chart)
        Highcharts.chart('internetChart1', {
            chart: {
                type: 'areaspline',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,

                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false  // Highcharts 로고 및 링크 제거
            },
            series: [{
                name: 'OUT',
                data: [130, 40, 170, 110, 260, 280, 200, 220, 140, 260, 200, 230],
                lineColor: '#0253A5',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(2,83,165,1)'],
                        [1, 'rgba(2,83,165,0.3)']
                    ]
                },
            }, {
                name: 'IN',
                data: [80, 60, 110, 90, 120, 170, 140, 180, 190, 230, 160, 190],
                lineColor: '#EC6B01',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(236,107,1,1)'],
                        [1, 'rgba(236,107,1,0.3)']
                    ]
                },
            }]
        });

        // 인터넷 차트2 (Internet 1 Line Chart)
        Highcharts.chart('internetChart2', {
            chart: {
                type: 'areaspline',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                gridLineColor: 'rgba(255,255,255,0.3)'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,

                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false  // Highcharts 로고 및 링크 제거
            },
            series: [{
                name: 'OUT',
                data: [130, 40, 170, 110, 260, 280, 200, 220, 140, 260, 200, 230],
                lineColor: '#0253A5',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(2,83,165,1)'],
                        [1, 'rgba(2,83,165,0.3)']
                    ]
                },
            }, {
                name: 'IN',
                data: [80, 60, 110, 90, 120, 170, 140, 180, 190, 230, 160, 190],
                lineColor: '#EC6B01',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(236,107,1,1)'],
                        [1, 'rgba(236,107,1,0.3)']
                    ]
                },
            }]
        });
    }
    window.renderCharts = renderCharts;

    // 페이지 로드 시 차트 생성
    renderCharts();
});