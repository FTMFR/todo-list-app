import PageTitle from "../components/PageTitle";
import Layout from "../components/Layout";
import AppContent from "../components/AppContent";

export default function HomePage() {
  return (
    <Layout>
      <PageTitle>TODO List</PageTitle>
      <AppContent />
    </Layout>
  );
}
