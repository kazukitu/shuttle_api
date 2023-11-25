#ITME555 Final 
Shuttle APP Backend

#Launch App
npm -g install pm2

pm2 start final.js
┌────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼───────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 1  │ app       │ default     │ 1.0.0   │ fork    │ 132808   │ 0s     │ 1205 │ online    │ 0%       │ 14.1mb   │ admin    │ disabled │
│ 3  │ final     │ default     │ 1.0.0   │ fork    │ 118914   │ 3m     │ 15   │ online    │ 0%       │ 50.3mb   │ admin    │ disabled │
│ 0  │ server    │ default     │ N/A     │ fork    │ 6249     │ 33D    │ 1    │ online    │ 0%       │ 39.6mb   │ admin    │ disabled │
└────┴───────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴───────
