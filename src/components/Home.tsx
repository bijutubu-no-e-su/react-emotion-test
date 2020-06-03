
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import pages from "src/pages";

const Home: FC = () => (
  <>
    <List celled relaxed>
      <List.Item className="list-item">
        <List.Icon name="building outline" size="large" verticalAlign="middle" />
        <List.Content>
          <Link to={pages.red.path}>{pages.red.title}</Link>
        </List.Content>
        <List.Content>
          <Link to={pages.green.path}>{pages.green.title}</Link>
        </List.Content>
        <List.Content>
          <Link to={pages.blue.path}>{pages.blue.title}</Link>
        </List.Content>
      </List.Item>
    </List>
  </>
);

export default Home;
