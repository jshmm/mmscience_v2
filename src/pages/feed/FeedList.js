import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import Layout from '../../component/Layout';
import data from './_feedList';
import './feed.css';

function FeedList() {
  return (
    <Layout>
      <div style={{ marginTop: '120px' }}>
        <div className="row">
          {data.articles.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="feed_article">
                <div className="feed_image">
                  <img
                    src="/photo/me.jpg"
                    alt={item.title}
                    style={{ width: '100%' }}
                    className="feed_content_image"
                  />
                </div>
                <div className="feed_content">
                  {item.tags.map(tag => (
                    <Chip label={tag} />
                  ))}
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">{item.content}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FeedList;
