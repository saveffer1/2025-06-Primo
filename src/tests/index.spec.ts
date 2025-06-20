import { describe, test, expect } from "bun:test";
import { merge } from "../index";

describe("merge() that returns sorted array by ascending", () => {
    test("it should return correct sorted array", () => {
        const col1: number[] = [1, 13, 28, 51];
        const col2: number[] = [67, 56, 50, 15];
        const col3: number[] = [39, 48, 66, 90];

        const expectedResult: number[] = [1, 13, 15, 28, 39, 48, 50, 51, 56, 66, 67, 90];

        const merged = merge(col1, col2, col3);
        expect(merged).toEqual(expectedResult);
    })

    test("it should return incorrect array if collection_2 are ascending", () => {
        const col1: number[] = [1, 13, 28, 51];
        const col2: number[] = [15, 50, 56, 67]; // ascending order
        const col3: number[] = [39, 48, 66, 90];

        const expectedResult: number[] = [1, 13, 15, 28, 39, 48, 50, 51, 56, 66, 67, 90];

        const merged = merge(col1, col2, col3);
        expect(merged).not.toEqual(expectedResult);
    })

    test("it should handle empty arrays", () => {
        const col1: number[] = [];
        const col2: number[] = [];
        const col3: number[] = [];

        const expectedResult: number[] = [];

        const merged = merge(col1, col2, col3);
        expect(merged).toEqual(expectedResult);
    })

    test("it should handle arrays with duplicate elements", () => {
        const col1: number[] = [1, 2, 2];
        const col2: number[] = [4, 3, 2];
        const col3: number[] = [4, 5];

        const expectedResult: number[] = [1, 2, 2, 2, 3, 4, 4, 5];

        const merged = merge(col1, col2, col3);
        expect(merged).toEqual(expectedResult);
    })

    test("it should handle arrays with negative numbers", () => {
        const col1: number[] = [-5, -3, -1];
        const col2: number[] = [4, 2, 0];
        const col3: number[] = [1, 3, 5];

        const expectedResult: number[] = [-5, -3, -1, 0, 1, 2, 3, 4, 5];

        const merged = merge(col1, col2, col3);
        expect(merged).toEqual(expectedResult);
    })

    test("it should handle arrays with all elements the same", () => {
        const col1: number[] = [2, 2, 2];
        const col2: number[] = [2, 2, 2];
        const col3: number[] = [2, 2, 2];

        const expectedResult: number[] = [2, 2, 2, 2, 2, 2, 2, 2, 2];

        const merged = merge(col1, col2, col3);
        expect(merged).toEqual(expectedResult);
    })
})