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
                <div class="card-body d-flex" >
                    <div class="">
                        <div>
                            <h6 class="mb-2">Product Name:</h6>
                            <p>{{ $product->productName }}</p>
                        </div>
                        <div>
                            <h6 class="mb-2">Product Price:</h6>
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
                    <form action="{{ route('admin.product.restock', ['product_id' => $product->id]) }}" method="POST">
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
                        @error('restockQuantity')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="mb-3">
                            <label for="restockQuantity" class="form-label">Restock Quantity</label>
                            <input type="number" class="form-control" id="restockQuantity" name="restockQuantity" min="1"
                                required>
                        </div>
                        <button type="submit" class="btn btn-primary">Restock Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection