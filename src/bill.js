// クラスの定義
class Item {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

// メイン処理
const main = () => {
    // ArrayListの代わりに標準の配列を使用します
    const items = [
        new Item("りんご", 100, 10),
        new Item("バナナ", 80, 20),
        new Item("みかん", 50, 15),
        new Item("お肉", 500, 5),
        new Item("牛乳", 300, 25),
        new Item("魚", 400, 30)
    ];

    console.log("お会計システム作成");

    // 確認用：中身を表示
    console.table(items);
};

main();