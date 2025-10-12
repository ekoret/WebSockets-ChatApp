import { createFileRoute } from "@tanstack/react-router";
import VerticalBarChart from "../components/Charts/VerticalBarChart";
import PieChart from "../components/Charts/PieChart";
import HorizontalBarChart from "../components/Charts/HorizontalBarChart";
import ScatterChart from "../components/Charts/ScatterChart";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <VerticalBarChart />
      <PieChart />
      <HorizontalBarChart />
      <ScatterChart />
    </>
  );
}
