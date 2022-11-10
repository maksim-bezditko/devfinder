import { GithubUser, LocalGithubUser } from "types";

export function extractLocalUser (user: GithubUser): LocalGithubUser {
	return {
		login: user.login,
		id: user.id,
		avatar: user.avatar_url,
		name: user.name,
		company: user.company,
		bio: user.bio,
		blog: user.blog,
		location: user.location,
		twitter: user.twitter_username,
		repos: user.public_repos,
		followers: user.followers,
		following: user.following,
		created: user.created_at
	}
}