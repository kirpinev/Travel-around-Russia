import { FC } from "react";

import {
  Page,
  Header,
  Lead,
  Intro,
  PhotoGrid,
  Places,
  Video,
  Comments,
  Footer,
} from "components";

const App: FC = (): JSX.Element => (
  <Page>
    <Header />
    <Lead />
    <Intro />
    <PhotoGrid />
    <Places />
    <Video />
    <Comments />
    <Footer />
  </Page>
);

export default App;
