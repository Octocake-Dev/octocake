import { Strategy as GitHubStrategy } from "passport-github2";
import passport from "passport";

import { config } from "./credentials.js";
import { prisma } from "./prisma";

passport.serializeUser((user: any, done) => {
  done(null, user._json.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { githubId: Number(id) },
    });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new GitHubStrategy(
    {
      clientID: config.github_client_id,
      clientSecret: config.github_client_secret,
      callbackURL: `${config.api_base_url}/auth/github/callback`,
      scope: ["user:email"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {
      const data = {
        githubId: profile._json.id,
        githubName: profile._json.name,
        githubUsername: profile._json.login,
        githubAvatarUrl: profile._json.avatar_url,
        githubEmail: profile.emails[0].value,
        githubUrl: profile.profileUrl,
      };

      await prisma.user.upsert({
        where: { githubId: profile._json.id },
        create: data,
        update: data,
      });

      return done(null, profile);
    }
  )
);
