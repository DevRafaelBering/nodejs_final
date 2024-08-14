let transactions = [];

exports.getAllTransactions = (request, response) => {
    response.json(transactions);
};

exports.createTransaction = (request, response) => {
    let id = new Date().getTime();
    let transaction = {
        id: id, ...request.body
    };
    console.log(request.body);
    transactions.push(transaction);
    response.send("ok");
};

exports.updateTransaction = (request, response) => {
    let id = parseInt(request.params.id, 10);
    let updatedTransaction = request.body;

    let index = transactions.findIndex(transaction => transaction.id === id);

    if (index === -1) {
        return response.status(404).json({ error: "Transaction not found" });
    }

    transactions[index] = { ...transactions[index], ...updatedTransaction };

    response.json(transactions[index]);
};

exports.deleteTransaction = (request, response) => {
    let id = parseInt(request.params.id, 10);

    let index = transactions.findIndex(transaction => transaction.id === id);

    if (index === -1) {
        return response.status(404).json({ error: "Transaction not found" });
    }

    transactions.splice(index, 1);

    response.status(204).end();
};
