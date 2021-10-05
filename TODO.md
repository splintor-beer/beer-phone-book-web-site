- [data] Remove general tags - like "Krafts" and "Businesses"
- [data] Shorten titles to make them fit in app
- Update Daniel's Telegram bot (Update URL to get data from, send "Refresh" command on update) - https://github.com/erezdaniel7/yeruhamPhoneBookbot/blob/master/app.js
- Add "Copy" button next to phone numbers
- Show icon for each result (and enable defining icons for pages/categories)
- [mobile]: Find how to make site links open the app on Android
- Show auto-complete dropdown for in-phonebook links in editor
- Highlight search in result page
- Add Kosher/Mehadrin info to food places
- Enable customization/themes
- Link unlinked e-mail addresses (check if there are any)
- Set a nightly backup of the data (to a private GitHub gist?)
- Handle cross-domain authentication
- Data sanitation:
    * Verify no page contains link to https://sites.google.com/site/yeruchamphonebook
    * verify social network links use relative images
- X Think of how to handle deletion (also so the flutter app can be updated about changes)
- X Handle page history
- Consider moving to preact (https://justinnoel.dev/2020/05/12/using-preact-in-a-next-js-project/)
- Consider moving to tailwind.css / svelte+sapper / shoelace