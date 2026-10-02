import mongoose, { Schema, model, models } from "mongoose";

const expenseSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: String,
            enum: ["Food", "Transport", "Shopping", "Others"],
            required: true
        },
        data: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Expenses = models.Expenses || model('Expenses', expenseSchema);

export default Expenses;