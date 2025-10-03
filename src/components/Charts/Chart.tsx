import { useEffect, useRef } from "react";
import ChartJS from "chart.js/auto";
import type { ChartType } from "chart.js";

interface ChartProps {
  type?: ChartType;
}

function Chart({ type = "line" }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(
    function () {
      const cnv = canvasRef.current;
      if (!cnv) return;

      const chart = new ChartJS(cnv, {
        type: type,
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Demo series",
              data: [10, 20, 15, 30, 25, 40],
              fill: "origin",
              borderColor: "#2563eb",
              backgroundColor: "rgba(37, 99, 235, 0.2)",
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      return function () {
        chart.destroy();
      };
    },
    [type]
  );

  return (
    <div style={{ width: "100dvw", height: "60vh" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Chart;
