# Meraken Assignment

## Installation

To install the dependencies

```bash
npm install
```

To run the application

```bash
npm run dev
```

## Additional libraries used

-Tailwind CSS
-React Router Dom
-Lucide React

## Challenges faced

During the development of this provider, we faced several challenges:

-Managing complex state: The provider needs to manage multiple states, such as the cart contents, product list, and category filter. This required careful planning and implementation to ensure that the states are updated correctly.

-Handling async data: The provider fetches data from an API, which can take time. We needed to implement a loading state to handle this async data and prevent the app from crashing.

## Overcoming Challenges

To overcome these challenges, we:

-Used a state management library: We used React Context API to manage the complex state of the provider. This helped us to keep the state organized and easy to manage.

-Implemented async data handling: We used the useEffect hook to handle async data and implemented a loading state to prevent the app from crashing.

## Values and Functions

The provider exposes the following values and functions:

handleAddtoCart: a function that adds an item to the cart
handleRemoveFromCart: a function that removes an item from the cart
handleOnCategoryChange: a function that updates the category filter
categories: an array of categories
itemCategory: the current category filter
setItemCategory: a function that updates the category filter
searchtext: the current search text
setSearchText: a function that updates the search text
sort: the current sort order
setSort: a function that updates the sort order
cart: the current cart contents
setCart: a function that updates the cart contents
products: the current product list
setProducts: a function that updates the product list
fetchedArray: the original product list fetched from the API
isLoading: a boolean indicating whether the data is still loading

## Images

![image](https://github.com/Shreshhthh/meraken-assignment/blob/main/Screenshot%20(59).png)
![image](https://{url})
![image](https://{url})
![image](https://{url})
