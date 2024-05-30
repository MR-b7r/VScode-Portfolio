import React from "react";
import { getUser } from "../../services/apiGithub";
import { useLoaderData } from "react-router-dom";
import ActivityCalendar from "react-github-calendar";
import RepoCard from "./RepoCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

const leftAnimationVar = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
const rightAnimationVar = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Github = () => {
  const [user, repos] = useLoaderData();
  const repoInfo = repos.filter((r) => r.stargazers_count > 0);
  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | Github</title>
      </Helmet>
      <div className="space-y-8 bg-mainBg p-4 md:p-8">
        <div className="flex h-24 max-w-full items-center justify-center gap-x-5 divide-x-2 divide-accentColor  rounded-lg bg-articleBg ">
          <motion.div
            className="flex items-center justify-center gap-x-2 divide-x-2  divide-accentColor"
            variants={leftAnimationVar}
            initial="initial"
            animate="animate"
          >
            <span>
              <img
                width={60}
                height={60}
                className="  rounded-full"
                src={user ? user.avatar_url : "Not found"}
                alt=""
              />
            </span>
            <h2 className="pl-2 text-lg font-medium text-textColor md:text-[21px]">
              {user?.login || "MR-b7r"}
            </h2>
          </motion.div>

          <motion.div
            className="pl-2"
            variants={rightAnimationVar}
            initial="initial"
            animate="animate"
          >
            <h2 className=" text-lg  font-medium text-textColor md:text-[21px]">
              {user?.public_repos || 20}
            </h2>
          </motion.div>

          <motion.div
            className="hidden pl-2 text-textColor md:block "
            variants={rightAnimationVar}
            initial="initial"
            animate="animate"
          >
            <h2 className="md:text-[21px]">
              Like Turning design into real Website!
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-y-5 md:gap-x-5 md:grid-cols-2 xl:grid-cols-4">
          {repoInfo &&
            repoInfo.map((repo, i) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                desc={repo.description}
                url={repo.html_url}
                homepage={repo.homepage}
                index={i}
              />
            ))}
        </div>

        <div>
          <ActivityCalendar
            username="MR-b7r"
            fontSize={17}
            theme={theme}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export async function loader() {
  const github = getUser();
  return github;
}
export default Github;
