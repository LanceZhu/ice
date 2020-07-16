import React from 'react';
// import { Link, helpers, logger, config } from 'ice';
import { Link } from '#ice/Router';
import { helpers } from '#ice/helpers';
import logger from '#ice/logger';
import config from '#ice/config';

logger.debug('helpers from ice', helpers.urlParse);
logger.debug('logger from ice', logger.debug);

logger.info('=== info ===');
logger.warn('=== warn ===');
logger.error('=== error ===');
logger.debug('=== debug ===');
logger.trace('=== trace ===');

export default function Home(props) {

  logger.info('Home props', props);
  logger.info('render home config.appId', config.appId);

  return (
    <>
      <h2>Home Page...{props.count}</h2>
      <Link to="/about">About</Link><br />
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

Home.getInitialProps = async () => {
  return { count: 1 };
};

Home.pageConfig = {
  title: 'Home Page'
};
