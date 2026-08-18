# threads-cards

Threads 圖卡圖床。publish-carousel 腳本用 raw URL 餵 Threads API。
每篇一個資料夾（D33、D34⋯⋯），PNG 為發布版，HTML/CSS 為模板源檔。

## 檔名慣例

- **D33、D34（過渡期手工卡）**：`cover.png`、`card2-steps.png` 這種舊命名。已上線的 raw URL 有人引用，**永遠不要改名**
- **D35 起（render-cards.mjs 產出）**：`01-cover.png`、`02-steps.png`⋯⋯編號前綴命名
- 同一個 D<N> 資料夾不要混用兩種命名；重渲染舊日期一律開新資料夾
