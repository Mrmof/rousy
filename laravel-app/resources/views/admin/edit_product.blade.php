@extends('layouts.adminlayout')


@section('content')



    <div class="row mt-4">
        <!-- Products  -->
        <div class="col-md-6 offset-md-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-2">Product Details</h6>
                    </div>
                </div>
                <div class="card-body d-flex">
                    <div class="">
                        <div>
                            <h6 class="mb-2">Product Name:</h6>
                            <p>{{ $product->productName }}</p>
                        </div>
                        <div>
                            <h6 class="mb-2">Old Product Price:</h6>
                            <p>{{ $product->oldProductPrice }}</p>
                        </div>
                        <div>
                            <h6 class="mb-2">Latest Product Price:</h6>
                            <p>{{ $product->productPrice }}</p>
                        </div>
                        <div>
                            <h6 class="mb-2">Product Quantity:</h6>
                            <p>{{ $product->productQuantity }}</p>
                        </div>
                        <div>
                            <h6 class="mb-2">Product Description:</h6>
                            <p>{{ $product->productDescription }}</p>
                        </div>
                    </div>
                    <div>
                        <h6 class="mb-2">Product Image:</h6>
                        <img src="{{ asset('product_images/' . $product->productImage) }}" alt="{{ $product->productName }}"
                            class="img-fluid">
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.product.edit', ['product_id' => $product->id]) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @if (session('success'))
                            <script>
                                iziToast.show({
                                    title: 'Success',
                                    message: "{{ session('success') }}",
                                    color: 'green'
                                });
                            </script>
                        @endif
                        @if (session('error'))
                            <script>
                                iziToast.show({
                                    title: 'Error',
                                    message: "{{ session('error') }}",
                                    color: 'red'
                                });
                            </script>
                        @endif
                        @error('productName')
                            <script>
                                iziToast.show({
                                    title: 'Error',
                                    message: "{{ $message }}",
                                    color: 'red'
                                });
                            </script>
                        @enderror
                        <div class="form-group mb-3">
                            <label for="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" name="productName"
                                placeholder="Enter product name" value="{{ $product->productName}}" required>
                        </div>
                        @error('productImage')
                            <script>
                                iziToast.show({
                                    title: 'Error',
                                    message: "{{ $message }}",
                                    color: 'red'
                                });
                            </script>
                        @enderror
                        <div class="form-group mb-3">
                            <label for="productImage">Product Image</label>
                            <input type="file" class="form-control" id="productImage" name="productImage" accept="image/*">

                        </div>
                        @error('productPrice')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" name="productPrice"
                                placeholder="Enter product price" value="{{ $product->productPrice }}" required>
                        </div>
                        @error('productDescription')
                            <script>
                                iziToast.show({
                                    title: 'Error',
                                    message: "{{ $message }}",
                                    color: 'red'
                                });
                            </script>
                        @enderror
                        <div class="form-group mb-3">
                            <label for="productDescription">Description</label>
                            <textarea class="form-control" id="productDescription" name="productDescription" rows="3"
                                placeholder="Short description">{{ $product->productDescription }}</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection