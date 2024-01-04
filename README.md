# Court Booking App

## Git Branching Naming Convention

### Regular Branches

#### main
The default production branch in a Git repository that needs to be permanently stable. Developers can merge changes into the master branch only after code review and testing. All collaborators on a project must keep the master branch stable and updated.

#### develop

The main development branch that serves as a central hub for developers to integrate new features, bug fixes, and other changes. Its primary purpose is to be the place for making changes to keep the developers from implementing them directly in the master branch. Developers test, review, and merge the changes from the dev into the master branch.

#### test
The branch that contains all the code ready for QA and automation testing. QA testing is necessary before implementing any change in the production environment to maintain a stable codebase.


## Branch Category Words
- ### Bugfix branch.
  
  The bugfix branch contains the code with bugs that require prompt fixes. It can be the rejected code from feature branches that needs fixing before implementation.
- ### hotfix branch.
  The hotfix branch is a place for implementing a temporary solution into a buggy code without adhering to the usual procedure. The hotfix branch is used in an emergency and when a fast fix is needed. Developers merge the hotfix branch directly into the production branch and later into the development branch.
- ### feature branch. 
  A feature branch serves to add, reconfigure, or remove a feature. The feature branch is based on the development branch. After the changes are made, developers merge the feature branch back into the development branch.
- ### Experimental branch. 
  This branch serves as a place for developing new features or ideas that are not part of a release or a sprint. It is a branch for trying out new things.
- #### WIP branch.
  Devs use WIP (work in progress) b
ranches to develop or try out new features. These branches may not necessarily be part of the regular development workflow. WIP branches are project-specific and often informal, with no specific or standardized rules.
- ### Merging branch. 
  A merging branch is a temporary branch used for resolving merge conflicts. Conflicts can arise when merging the latest development and a feature or hotfix branch into another branch. The merging branch is also useful when combining two branches of a feature developed by multiple contributors. This process involves merging, verifying, and finalizing the changes.

Keep branch names lowercase and separating the words with hyphens or slashes.
Using Hyphens and Slashes as Separators

Example: `douglasvdm/feature/booking-form`
<github username>/<category word>/<short-description-separated-by-hyphens>

[reference this doc](https://phoenixnap.com/kb/git-branch-name-convention)