import { WEBSITE_HOST_URL } from "@/api/baseUrl";
import { MetadataRoute } from "next";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const appRoutes = [
  "",
  "/about",
  "/careers",
  "/contactus",
  "/downloads",
  "/policy",
  "/rates",
  "/terms",
];
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = "daily" as ChangeFrequency;

  const jobs = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/api/v1/jobs`
  ).then((res) => res.json());

  const careers =
    jobs &&
    jobs?.data.map((_job: any) => ({
      url: `${WEBSITE_HOST_URL}/careers/${_job?._id}`,
      lastModified: _job?.updatedAt,
      changeFrequency,
    }));

  const routes = appRoutes.map((_route) => ({
    url: `${WEBSITE_HOST_URL}${_route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes, ...careers];
}
