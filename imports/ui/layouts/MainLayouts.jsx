const MainLayout = ({content, nav = ""}) => (
  <div className="app">
    <aside>
      <header>Slack React Chat</header>
      {nav}
    </aside>
    <main>{content}</main>
  </div>
);

export default MainLayout;
