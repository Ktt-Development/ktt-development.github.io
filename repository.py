import sys

import codecs
import requests
from github import Github


# first arg is python compile; second arg is oauth
def main():
    github = Github(sys.argv[1])
    repos = open("repository.txt", "r").read().split('\n')  # String[]
    org = github.get_organization("Ktt-Development")

    for r in repos:
        repo = org.get_repo(r)
        if not(repo is None):
            # write repo.json
            request = requests.get(repo.url, allow_redirects=False)
            request.json()

            file = codecs.open(f"_data/repository/{r}.json", "w", encoding="utf-8")
            file.write(request.text)
            file.close()
            request.close()
            # write readme.md
            request = requests.get(f"https://raw.githubusercontent.com/Ktt-Development/{r}/master/README.md")
            file = codecs.open(f"_data/repository/{r}.md", "w", encoding="utf-8")
            file.write(request.text)
            file.close()
            request.close()

    return


if __name__ == "__main__":
    main()
