import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

/**
 * 대시보드
 * 인스타 그램 따라하기
 * 540px 모바일
 * 745px 태블릿
 * 1120px 웹
 *
 */
function App() {
  return (
    <Layout>
      <div className="mt-5">
        <HomePage />
      </div>
    </Layout>
  );
}

export default App;
