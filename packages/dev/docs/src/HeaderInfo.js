/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { Flex } from "@react-spectrum/layout";
import typographyStyles from "@watheia/spectrum-css-temp/components/typography/vars.css";
import js from "highlight.js/lib/languages/javascript";
import React from "react";
import Lowlight from "react-lowlight";
import styles from "./headerInfo.css";
import { ResourceCard } from "./ResourceCard";

Lowlight.registerLanguage("js", js);

export function HeaderInfo(props) {
  let {
    packageData,
    componentNames,
    sourceData = []
  } = props;

  let preRelease = packageData.version.match(/(alpha)|(beta)|(rc)/);
  let importName = packageData.name;
  if (importName.startsWith("@react-spectrum") && process.env.DOCS_ENV === "production" && !preRelease) {
    importName = "@watheia/react-spectrum";
  }

  return (
    <>
      <table className={styles["headerInfo"]}>
        <tbody>
          <tr>
            <th className={typographyStyles["spectrum-Body--secondary"]}>
              install
            </th>
            <td className={typographyStyles["spectrum-Body4"]}>
              <code className={typographyStyles["spectrum-Code4"]}>
                yarn add {importName}
              </code>
            </td>
          </tr>
          <tr>
            <th className={typographyStyles["spectrum-Body--secondary"]}>
              version
            </th>
            <td className={typographyStyles["spectrum-Body4"]}>
              {packageData.version}
            </td>
          </tr>
          {componentNames && (
            <tr>
              <th className={typographyStyles["spectrum-Body--secondary"]}>
                usage
              </th>
              <td className={typographyStyles["spectrum-Body4"]}>
                <Lowlight
                  language="js"
                  value={`import {${componentNames.join(
                    ", "
                  )}} from '${importName}'`}
                  inline
                  className={typographyStyles["spectrum-Code4"]}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Flex wrap gap="size-200">
        {sourceData.map((source) => (
          <ResourceCard type={source.type} url={source.url} />
        ))}
        <ResourceCard
          type="GitHub"
          url={`https://github.com/watheia/spectrum/tree/main/packages/${encodeURI(
            packageData.name
          )}`}
        />
        <ResourceCard
          type="NPM"
          url={`https://www.npmjs.com/package/${encodeURI(packageData.name)}`}
        />
      </Flex>
    </>
  );
}
