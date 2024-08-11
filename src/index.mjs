// 追加ボタンを押した時の挙動
const onClickAdd = () => {
  // inputTextにinput要素に入ったものを取得しちゃう。
  const inputText = document.getElementById("add-text").value;
  //   追加を押された時に、inputを空にする。
  document.getElementById("add-text").value = "";
  //   alert(inputText);

  // 未完了のリストに追加
  createIncompleteTodo(inputText);
};

// 渡された引数を元に、未完了のTODOを作成する
const createIncompleteTodo = (todo) => {
  //   liの生成をする
  const li = document.createElement("li");
  console.log(li); // li生成確認用

  // divの生成
  const div = document.createElement("div");
  // css用のlist-rowも生成可能
  div.className = "list-row";
  console.log(div); // li生成確認用

  // pタグの生成
  const p = document.createElement("p");
  // css用のtodo-itemも生成可能
  p.className = "todo-item";
  p.innerText = todo;
  console.log(p); // li生成確認用

  // 完了タグ（buttton）作成
  const completeButton = document.createElement("button");

  //   完了ボタンの中身作成
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("完了");
    // 完了ボタンが押された場合、liタグを全て完了のToDoに持っていく。
    const moveTarget = completeButton.closest("li");

    // console.log(moveTarget);
    // 完了ボタンの次の削除ボタンを削除する。remove
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタンを生成してdivは配下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // Todoの内容を取得し、未完了リストに追加
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);

    // 完了済みのリストに移動
    // これだけで完了済みリストに全部移動される
    document.getElementById("complete-list").appendChild(moveTarget);
  });
  //   console.log(completeButton);

  // 削除タグ（buttton）作成
  const deleteButton = document.createElement("button");
  //   削除ボタンの中身作成
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 削除ボタンを押された時の処理 ▶︎ 該当部分を削除
    const deleteTarget = deleteButton.closest("li");
    // ↑一番近いliを探してくれる。だからclosest
    // console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  console.log(deleteButton);

  // divよりも下の要素について要素をAppendする。
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  console.log(li);

  document.getElementById("incomplete-list").appendChild(li);
};

// HTMLのidを取得する。
document.getElementById("add-button").addEventListener("click", onClickAdd);
