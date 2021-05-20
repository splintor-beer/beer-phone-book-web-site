## ספר הטלפונים של ירוחם - אתר האינטרנט 

A [next.js](https://nextjs.org/) site to provide access to Yeruham Phone book data.

We store the data on a [Wix site data collection](https://www.wix.com/corvid/feature/database)
with [services](./wix-site-code) to access the data.
The actual Wix code is stored on the site and [duplicated here](./wix-site-code) to make it open and to track changes.

### Things left to be done:
1. TODO: Add help link to login page
1. TODO: Add documentation and link to it from home
1. TODO: Make tags in editor open in new window
1. TODO: Convert phone numbers to tel: links on mobile devices (and consider converting unlinked e-mail addresses) - use mobile app code
1. TODO: Add "Copy" button next to phone numbers
1. TODO: Show icon for each result (and enable defining icons for pages/categories)
1. TODO [mobile]: Update app to use the new site
1. TODO [mobile]: Find how to make site links open the app on Android
1. TODO: Handle in-phonebook links in editor
  * Show auto-complete dropdown
  * replace pasted URLs to relative URLs
1. TODO: Highlight search in result page
1. TODO: Handle cross-domain authentication
1. TODO: Data sanitation:
    * Verify no page contains link to https://sites.google.com/site/yeruchamphonebook
    * verify social network links use relative images
1. TODO: X Think of how to handle deletion (also so the flutter app can be updated about changes)
1. TODO: X Handle page history
1. TODO: Consider moving to preact (https://justinnoel.dev/2020/05/12/using-preact-in-a-next-js-project/)
1. TODO: Consider moving to tailwind.css / svelte+sapper / shoelace


### Benefits in new sites
1. It won't close on 2021
1. It has nicer URLs
1. It enables custom favicon
1. It is designed exactly as I want it
1. It enables logging-in based on phone number existence
1. It enables tagging pages
1. It enables easily making some pages public (by tagging them "public") so even non-members can access them
1. It provides simple URL, based only on title, thus removing the need to come up with English id, and helps to detect duplicates
1. It enables control on how page link looks on WhatsApp previews
1. It enables easy Telegram integration (notify on change/access/search)
1. It enables browser's search engine integration
1. It won't send me e-mails when I edit pages
1. It can provide easy editing on mobile devices
1. It can search partial words and partial phone-numbers
1. It can search in Hebrew if English search finds no result.
1. It enables editing in mobile
1. It enables easily adding and formatting emails and phone numbers
1. It has Hebrew UX (edit buttons, etc.)
1. It enables having simple URL to get data JSON for mobile app, without a need to have a Google Apps script to get it and cache it.
