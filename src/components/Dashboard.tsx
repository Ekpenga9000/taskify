import Stats from "./Stats";

const Dashboard = () => {
  return (
    <section className="flex justify-center mt-8 gap-8">
      <Stats name="Total" stat="10" />
      <Stats name="Pending" stat="5" />
      <Stats name="Completed" stat="5" />
    </section>
  );
};

export default Dashboard;
