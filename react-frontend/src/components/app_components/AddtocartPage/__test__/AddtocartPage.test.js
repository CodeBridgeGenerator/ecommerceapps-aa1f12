import React from "react";
import { render, screen } from "@testing-library/react";

import AddtocartPage from "../AddtocartPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addtocart page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddtocartPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addtocart-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addtocart-add-button")).toBeInTheDocument();
});
