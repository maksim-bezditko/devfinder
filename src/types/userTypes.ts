export interface LocalGithubUser {
	login: string,
	id: number,
	avatar: string,
	name: string,
	company: string,
	bio: string,
	blog: string,
	location: string
	twitter: string,
	repos: number,
	followers: number,
	following: number,
	created: string
}

export interface GithubUser {
	login: string,
	id: number,
	avatar_url: string,
	name: string,
	company: string,
	bio: string,
	blog: string,
	location: string
	twitter_username: string,
	public_repos: number,
	followers: number,
	following: number,
	created_at: string
}

export interface GithubError {
	message: string,
	documentation_url: string
}

