import "./App.css";
import { Layout, Space } from "antd";
import { MenuHeader } from "./menu.jsx";
import { FooterSpace } from "./footer/footer";
import { AboutUs } from "./aboutUs/aboutUs";
import { CoffeeOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { ProductList } from "./products/products";
import { FloatButton } from "antd";

const { Header, Footer, Content } = Layout;

const openWhatsApp = () => {
  window.open("https://wa.me/541128626198", "_blank");
};

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: "100vw",
      overflow: "hidden",
    }}
  >
    <Layout>
      <Header className="header">
        <MenuHeader />
        <CoffeeOutlined className="header-icon" />
      </Header>
      <Content className="App">
        <div className="principal">
          <h1 className="principal-h1">Bakery</h1>
          <p className="principal-p">
            Welcome to our bakery! We're dedicated to baking the freshest and
            most delicious treats. Enjoy our freshly baked bread, exquisite
            cakes, and irresistible pastries.
          </p>
        </div>
        <div id="products">
          <ProductList
            title="Our Products"
            paragraph="Explore our amazing selection of products!"
          />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <FloatButton
          className="float-button"
          icon={<WhatsAppOutlined />}
          onClick={openWhatsApp}
        />
      </Content>
      <Footer className="footer">
        <FooterSpace />
      </Footer>
    </Layout>
  </Space>
);
export default App;
