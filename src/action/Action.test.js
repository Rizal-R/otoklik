import axios from "axios";

import { fetchData, GET_API } from "action/utils";

jest.mock("axios");

describe("fetchData", () => {
    describe("when API call is successful", () => {
        it("should return data list", async () => {
            // given
            const data = [
                { id: 1361, title: "test" },
            ];
            axios.get.mockResolvedValueOnce(data);

            // when
            const result = await fetchData();

            // then
            expect(axios.get).toHaveBeenCalledWith(`${GET_API}`);
            expect(result).toEqual(data);
        });
    });

    describe("when API call fails", () => {
        it("should return empty data list", async () => {
            // given
            const message = "Network Error";
            axios.get.mockRejectedValueOnce(new Error(message));

            // when
            const result = await fetchData();

            // then
            expect(axios.get).toHaveBeenCalledWith(`${GET_API}`);
            expect(result).toEqual([]);
        });
    });
});