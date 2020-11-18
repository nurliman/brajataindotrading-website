import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const herosDirectory = path.join(process.cwd(), "posts/heros");

type HeroFrontMatter = {
  title: string;
  subTitle: string;
  imageUrl: string;
};

export interface HeroData extends HeroFrontMatter {
  id: string;
  textHtml: string;
}

export const getAllHerosData = (): Promise<HeroData[]> => {
  const files = fs.readdirSync(herosDirectory);
  const allHerosData = files.map((fileName) => {
    const fileFullPath = path.join(herosDirectory, fileName);
    const stat = fs.lstatSync(fileFullPath);

    if (stat.isDirectory()) return null;

    const id = fileName.replace(/\.md$/, "");

    const fileContents = fs.readFileSync(fileFullPath, "utf8");

    const matterResult = matter(fileContents);

    return remark()
      .use(html)
      .process(matterResult.content)
      .then((processedContent) => {
        const textHtml = processedContent.toString();
        const payload: HeroData = {
          id,
          textHtml,
          ...(matterResult.data as HeroFrontMatter),
        };

        return payload;
      });
  });

  return Promise.all(allHerosData).then((results) => {
    const filteredAllHerosData = results.filter((item) => Boolean(item));

    return filteredAllHerosData.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    });
  });
};
