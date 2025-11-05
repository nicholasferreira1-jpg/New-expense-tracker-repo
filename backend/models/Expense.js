const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema ({
    userId: { type: mongoose.Schema.Types.Objects, ref: "User", required: true},
    icon: {type: String },
    category: { type: String, required: true }, // Eample: FOod, REnt, Grofceries
    amount: { type: Number, required: true},
    date: { tyoe: Date, default: Date.now },
}, { timestamps: true});

module.exports = mongoose.model("Expense", ExpenseSchema);