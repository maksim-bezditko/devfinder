import { GithubError, GithubUser } from "types";

export function isGithubUser(user: GithubError | GithubUser): user is GithubUser {
	return "id" in user;
}