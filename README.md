# threads-cards

Threads 圖卡圖床（公開 repo）。publish-carousel 腳本用 raw URL 餵 Threads API，Threads 發文當下會把圖抓走存一份。
PNG 為發布版，HTML/CSS 為模板源檔。本機路徑 `C:\Github\mine\Thread\yrrah_9\cards`，skill 資料夾的 `CARD/` 是指向它的 junction。

## 資料夾結構（2026-10-06 整理）

```
tips/    Claude Code Everyday（@yrrah9_），每篇一個 D<N> 資料夾（D33、D34 ⋯⋯）
book/    書籍知識（@yrrah_book），每個題材一個資料夾（axes、germs、reciprocity、wheat、scarcity、gpt6astra）
```

raw URL 格式：`https://raw.githubusercontent.com/yrrah95/threads-cards/main/<資料夾>/<檔名>`，
例：`tips/D81/01-cover.png`、`book/scarcity/v1-01.png`。
發文腳本由圖片在 `CARD/` 底下的相對路徑自動換算，不用手寫網址。

## 檔名慣例

- **tips/D33、D34（過渡期手工卡）**：`cover.png`、`card2-steps.png` 這種舊命名
- **tips/D35 起（render-cards.mjs 產出）**：`01-cover.png`、`02-steps.png`⋯⋯編號前綴命名
- **book/ 底下**：`v1-01.png`、`v1-02.png`⋯⋯（v1 是第一版，改圖就開 v2，見下一節）
- 同一個資料夾不要混用兩種命名；重渲染舊日期一律開新資料夾

## 改圖規則

- **圖床檔名不要覆寫同名檔**，改圖就換新檔名（`v1-01.png` → `v2-01.png`），避免 raw.githubusercontent 的快取讓 Threads 抓到舊圖
- 剛 push 完的新檔，raw URL 可能因為快取先回 404，約 1 分鐘後轉 200，不是檔案沒上去（可用 `gh api repos/yrrah95/threads-cards/contents/<資料夾>` 確認）

## 搬動紀錄

- 2026-10-06：原本全部資料夾散在根目錄，整理成 `tips/`、`book/`。舊路徑對照：`D<N>` → `tips/D<N>`、`BOOK-<名>` → `book/<名>`、`books-01-gpt6astra` → `book/gpt6astra`；`_dryrun`（測試輸出）刪除，需要時可用 `git checkout 845c879 -- _dryrun` 還原
- 這次同時放掉了舊規則「D33、D34 的 raw URL 永遠不要改名」：原因是 README 當年寫「已上線的 raw URL 有人引用」，2026-10-06 抽查 Day 33、Day 34 與 knowledge 兩篇貼文，圖片都是 Meta 自己的伺服器網址，不依賴本 repo；本機找不到其他引用者。**外部其他公開 repo 有沒有引用沒辦法全查，未驗證**
- 同日一併收進 12 個原本沒進版控的模板 HTML（tips/D55、D57、D64 各 4 個）
