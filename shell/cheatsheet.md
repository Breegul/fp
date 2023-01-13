## Command structure

'[command/utility] [options/flags] [required information]'


## Various utilities

-echo: repeat something
-ls: list files
-cd: changes folder
-cat: print out a file
-nano: opens a text editor
-code: opens vscode
-grep: searches files
-man: opens help pages
-mkdir: creates folders
-touch: creates files
-rm: removes files / folders (if you -r)
-mv: move/rename
-cp: copy
-cmd1 > file.txt: do cmd1 and put the output into a file
-curl: download from place (e.g. curl https://github.com will return the html file)
-\ continue commands to next line in terminal
-bash file.sh: runs a shell script which can contains commands 

## Options / flags

-Short-form options use single hyphen '-a'
-Long-form use a double '--help'
-Short-form flags can be combined together '-lah'
-If an option needs more information it comes immediately after the option

## System variables

-A system variable by convention starts with $
-$SHELL what is the shell
-$PWD what is the current working directory
-export MYVAR=42, creates a system variable that will last for the session
-FILELIST=`ls` Substitution. Either by wrapping with backticks or $()

## Config

-.bashrc or .zshrc
-alias fp="cd ~/code/fp" creates a shortcut.
