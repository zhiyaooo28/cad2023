var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n 靜態: https://zhiyaooo28.github.io/cad2023 \n 小組網站: https://41123112.github.io/cad2023_ag4 \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '磁力吸引', 'text': '\n 圖檔: 磁力吸引零件檔 \n \n CoppeliaSim示範影片: 磁力吸引 \n \n \n \n \n \n \n \n 草圖繪製\xa0 \n \n 軌道完成情況 \n \n 草圖繪製 \n \n \n \n 軌道角座 \n \n 草圖繪製 \n \n \n \n \n \n \n \n 繪圖影片: https://nfuedu-my.sharepoint.com/personal/41123111_nfu_edu_tw/_layouts/15/stream.aspx?id=%2Fpersonal%2F41123111%5Fnfu% 5Fedu%5Ftw%2FDocuments%2Fcad2023%5Fag4%2F%E7%B9%AA%E5%9C%96%E9%81%8E%E7%A8%8B%2Emp4&referrer=StreamWeb%2EWeb&parioreferrerEWeb&. > \n \n \n \n \n', 'tags': '', 'url': '磁力吸引.html'}, {'title': 'hw', 'text': '\n \n', 'tags': '', 'url': 'hw.html'}, {'title': 's1511', 'text': '網址:1511.cycu.org:9139 \n \n', 'tags': '', 'url': 's1511.html'}, {'title': 'replit', 'text': '示範影片 \n \n \n \n', 'tags': '', 'url': 'replit.html'}, {'title': '合併acp時遇到的困難及如何解決', 'text': '\n 遇到的問題: \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 1. Rebase 過程中無法更新分支： \n \n 問題：在進行 rebase 操作時，遇到無法更新分支的問題。 \n 解決方法：嘗試退出 rebase，從遠端拉取最新更新，然後重新開始 rebase。如果還有問題，檢查文件權限，更新 Git 版本，或在 Git 社群尋求協助。 \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2. 編輯 commit 時的 rebase 操作： \n \n 問題：在 rebase 過程中，需要編輯 commit。 \n 解決方法：根據 Git 提示使用  git commit --amend  來修改當前的 commit，或使用  git rebase --continue  繼續 rebase 操作。 \n \n \xa0 \xa0\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 3. 強制更新分支的問題： \n \n 問題：無法直接在當前工作中的分支上強制更新分支。 \n 解決方法：創建並切換到一個暫時分支，然後在該暫時分支上進行強制更新，最後切換回目標分支。 \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 4. 使用 Bash 腳本進行一次性的 Git 操作： \n \n 問題：想要一次性執行多個 Git 命令。 \n 解決方法：創建一個 Bash 腳本，將需要的 Git 命令放入腳本中，這樣可以方便地一次性執行這些操作。 \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 5. 提交和推送更改到遠端儲存庫： \n \n 問題：提交和推送更改時的相關操作。 \n 解決方法：使用  git add  來將更改添加到暫存區，然後使用  git commit -m "提交訊息"  進行提交，最後使用  git push  將本地分支的更改推送到遠端儲存庫。 \n \n \n \n 以下是我與Chat GPT所討論的照片: \n \n 1. \n \n \n 2. \n \xa0 \n \n 3. \n \n \n 4. \n \n \n 5. \n \n \n 6. \n \n \n 7. \n \n \n 8. \n \n \n 9. \n \n', 'tags': '', 'url': '合併acp時遇到的困難及如何解決.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'NX', 'text': '簡介: \n \n \n \n \n \n \n \n \n \n \n \n \n \xa0 NX CAD是由Siemens PLM Software開發的一個強大的電腦輔助設計（CAD）軟體。它提供了一個全面的工具集，用於設計、建模和製造產品。NX CAD能夠支援設計者在整個產品開發過程中進行各種任務，包括概念設計、工程設計、模擬、製造準備等。這個軟體具有強大的功能，可以幫助使用者建立複雜的三維模型、進行分析、測試產品性能，以及準備生產所需的數據和文件。NX CAD被廣泛應用於各種行業，如航空航天、汽車製造、工程等，幫助設計師和工程師創造出創新的產品。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 下載教學影片: NX下載影片 \n \n', 'tags': '', 'url': 'NX.html'}, {'title': 'solidworks', 'text': '簡介: \n SolidWorks是一款由Dassault Systèmes開發的三維電腦輔助設計（CAD）軟體。它專門用於建模、設計和製造 各種機械和工程產品。SolidWorks提供了一個具有繪圖和功能強大的介面，讓使用者能夠建立複雜的三維模型並 進行工程分析、渲染和動畫展示。\n\n該軟體的特點之一是其用戶友好性，它採用了易於理解的介面和易於學習的工具，讓初學者和專業用戶都能夠快速 上手。SolidWorks擁有廣泛的功能，包括各種建模工具、組裝設計、分析模擬、繪圖和文件化等功能，使得使用者 可以在一個平台上完成整個產品設計的過程。\n\nSolidWorks它廣泛應用於各個行業，如機械工程、汽車製造、航空航天、電子產品等。強大的性能和靈活性使工 程師和設計師能夠快速、準確地熔化概念轉化為實際的產品，並進行必要的和測試改進。 \n 下載安裝 SOLIDWORKS 2022 : \n 下載 SolidWorks 2022 安裝檔案 \xa0 (檔案大小 16GB, for @nfu users only, 請先根據安裝序號與認證主機在校園網路中或透過 VPN (從 \xa0 ecare 登入 申請) 連網, 必須完整安裝結束後, 再進行 service pack 更新) \n 安裝 SoildWorks 2022 過程畫面 (因為必須在校園內或使用 VPN 認證才能完成安裝, 因此以下直接顯示出 Serial Number 與認證主機 IP 位址): \n 下載後解開壓縮檔案, 執行 Setup.exe 進行安裝 (以::2 主機的安裝為例): \n \n \n 輸入安裝序號, 以下只安裝基本模組, 並沒有勾選其餘套件: \n \n \n 在安裝過程必須先安裝與序號對應的版本內容後再進行更新, 因此以下使用內定的否, 表示先不下載更新檔案: \n \n 勾選接受 SolidWorks 條款後進行安裝: \n \n 點選馬上安裝後,\xa0 會跳出認證伺服器的視窗表單, 必須輸入正確的認證埠號與 IPv4 位址才可進行安裝, 截至 2023.04.07, 校內的 SolidWorks 認證主機僅支援 IPv4 網路協定認證, 若希望取得認證的電腦僅啟動 IPv6 網路協定, 將無法取得認證授權. \n \n 接著按下確定後, 就可以進行漫長且容量達 20 GB 的 SolidWorks 安裝: \n \n 安裝完成之前, 會跳出下列視窗, 可以選擇不參加客戶經驗改進計畫, 或許能讓操作過程更加順暢: \n \n 最後按下完成鍵就可以執行 SolidWorks 2022 了. \n 啟動時顯示共有 500 個用戶可以同時連線: \n \n 啟動時必須允許 SolidWorks 通過公用網路防火牆: \n \n 而且必須接受 SolidWorks 的使用授權: \n \n 然後還要進行各模組的資料更新, 以下選擇更新所有模組: \n \n 更新完成後, 在開始選單中執行 SOLIDWORKS 2022, 然後同意使用授權: \n \n 終於可以使用這個佔用 20GB 硬碟資料的 SolidWorks 了: \n \n \n\n無論是初學者還是經驗豐富的專業人士，SolidWorks都是一個功能強大且靈活的工具，可以幫助使用者實現他們的設計和製造目標。 \n', 'tags': '', 'url': 'solidworks.html'}, {'title': 'onshape', 'text': '\n 教學影片: onshape教學影片 \n \n \n \n', 'tags': '', 'url': 'onshape.html'}, {'title': 'exam', 'text': '\n', 'tags': '', 'url': 'exam.html'}, {'title': 'step1', 'text': '基本零件設計繪圖 \n \n \n 草圖1:: \n \n \n 草圖2: \n \n \n 繪圖影片: \n https://cad2023.zhiyaooo28.repl.co/downloads/123.mp4 \n', 'tags': '', 'url': 'step1.html'}, {'title': 'step2', 'text': '施力機構設計, 納入軌道下方控制盒中.\xa0 \n \n', 'tags': '', 'url': 'step2.html'}, {'title': 'step3', 'text': '將軌道、鋼球與簡化後的控制盒輸入 CoppeliaSim. \n \n \n \xa0 \n \n \n', 'tags': '', 'url': 'step3.html'}, {'title': 'step4', 'text': '配合控制系統設計, 納入感測器與施力機構或系統. \n \n', 'tags': '', 'url': 'step4.html'}, {'title': 'step5', 'text': '在 localhost 以 IPv6 ZMQ remote API Python 程式, 配合感測器作動對鋼球施力. \n \n', 'tags': '', 'url': 'step5.html'}, {'title': 'step6', 'text': '跨網路對協同組員的場景進行控制模擬.\xa0 \n \n', 'tags': '', 'url': 'step6.html'}, {'title': '個人評分', 'text': '\n', 'tags': '', 'url': '個人評分.html'}, {'title': '評分依據', 'text': '\xa0倉儲與網站評分項目: \n A: 是否 按照進度明確標示倉儲的改版歷程 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n 各學員倉儲與網站的評分及格標準為: \n 各學員必須在網站呈現 完整看過以下各階段的教學影片的歷程, 並了解其內容要旨 \n 並針對各階段 內容實際操作至少一遍 \n 教學影片: \n 1. \xa0 利用批次檔、登錄檔與 powershell 執行網路設定 \xa0 (7:15) \n 2. \xa0 Onshape 零組件轉入 CoppeliaSim \xa0 (19:58) \n 3. \xa0 從 github 空倉儲建立 cmsimde 網際內容管理倉儲 \xa0 (15:22) \n 4. \xa0 之二 \xa0 (34:20) \n 5. \xa0 利用 Pull Requests 提出修改 studlist 倉儲資料的用法 \xa0 (7:58) \n 6. \xa0 利用 SSH 協定取下倉儲並啟動編輯網站 \xa0 (22:05) \n 7. \xa0 之二 \xa0 (10:16) \n 8. \xa0 s.cycu.org 伺服器設定操作 \xa0 (18:47) \n 9. \xa0 之二 \xa0 (9:46) \n 10. \xa0 之三 \xa0 (13:58, 無語音說明) \n 11. \xa0 之四 \xa0 (21:30) \n 12. \xa0 之五 \xa0 (19:02) \n 13. \xa0 Wink 操作說明 \xa0 (2:05) \n 14. \xa0 課程內容摘要簡報說明 \xa0 (26:22) \n 15. \xa0 之二 \xa0 (12:22) \n 16. \xa0 利用 ChatGPt 協助座位排序與列印問題 \xa0 (9:36) \n 17. \xa0 之二 \xa0 (13:53, 有嚴重回音) \n 18. \xa0 利用 Solvespace 繪製零組件並轉入 CoppeliaSim \xa0 (17:55) \n 19. \xa0 之二 \xa0 (23:05, 有嚴重回音) \n 20. \xa0 簡化後的專案一綱球永動模擬操作 \xa0 (12:37) \n 21. \xa0 之二 \xa0 (9:33) \n 22. \xa0 之三 \xa0 (21:09) \n 23. \xa0 之四 \xa0 (4:34) \n 24. \xa0 專案二 \xa0 (16:46) \n 25. \xa0 之二 \xa0 (15:41) \n 26. \xa0 之三 \xa0 (14:15) \n', 'tags': '', 'url': '評分依據.html'}, {'title': '自我評分', 'text': '自評分數:60 \n 每週都有使用 Replit、s1511維護網站，透過上課影片認識新的模擬軟體，日前因acp合併上遇到些困難，現在已解決，將補上遺漏進度。 \n A: 是否按照進度明確標示倉儲的改版歷程 \n 答:是 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n 答:是 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n 答:是(使用s1511.cycu.org、Replit 成功) \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n 答:是(使用SOLIDWORKS繪製) \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n 答:是 \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n 答:是 \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n 答:否 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n 答:否 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n 答:(完成step1、step3 ) \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n 答:尚未 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n 答:尚未 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n 答:尚未 \n \n \n \n \n \n', 'tags': '', 'url': '自我評分.html'}]};