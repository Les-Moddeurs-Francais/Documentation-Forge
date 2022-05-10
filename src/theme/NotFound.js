import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Link from "@docusaurus/core/lib/client/exports/Link";
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                Oups 🙄
              </h1>
              <p>
                  Il semble que nous ayons peut-être oublié cette page 👀
              </p>
              <p>
                  Si c'est le cas, n'hésitez pas à nous contacter sur <a href="https://discord.lesmoddeursfrancais.fr">Discord</a> 😊.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
