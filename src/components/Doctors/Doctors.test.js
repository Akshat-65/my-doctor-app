import React from "react";
import { render, waitFor ,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import DoctorsCard from "../Cards/DoctorsCard";
import CustomPagination from "../UIComponents/Pagination";
import Doctors from "./Doctors";

jest.mock("../Cards/DoctorsCard", () => {
    return jest.fn(() => {
      // Mock implementation for DoctorsCard component
      return <div>DoctorsCard content</div>;
    });
  });

jest.mock("../UIComponents/Pagination", () => {
    return jest.fn(() => {
      // Mock implementation for CustomPagination component
      return <div>CustomPagination content</div>;
    });
  });

describe("Doctors Component", () => {
  beforeEach(() => {
    DoctorsCard.mockClear();
    CustomPagination.mockClear();
  });

  test("render Doctors component with DoctorsCard and CustomPagination components", async() => {
    render(
      <MemoryRouter>
        <Doctors />
      </MemoryRouter>
    );
    await waitFor(() => {
        expect(DoctorsCard).toHaveBeenCalled();
        expect(CustomPagination).toHaveBeenCalled();
      });
  });
});
