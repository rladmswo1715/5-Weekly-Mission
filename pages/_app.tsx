import type { AppProps } from "next/app";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/Global.styled";
import Layout from "@/components/layout/Layout";
import Modal from "@/context/Modal";
import ModalPortal from "@/components/common/modal/ModalPortal";

export default function App({ Component, pageProps }: AppProps) {
  let childContent: React.ReactNode;
  switch (pageProps.layoutType) {
    case "removeLayout":
      childContent = (
        <Modal>
          <Component {...pageProps} />
          <ModalPortal />
        </Modal>
      );
      break;
    default:
      childContent = (
        <Layout>
          <Modal>
            <Component {...pageProps} />
            <ModalPortal />
          </Modal>
        </Layout>
      );
      break;
  }

  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {childContent}
    </StyledComponentsRegistry>
  );
}
