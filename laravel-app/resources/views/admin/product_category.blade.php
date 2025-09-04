@extends('layouts.adminlayout')


@section('content')


    <div class="row mt-4">
        <!-- Category Form -->
        <div class="col-md-6 offset-md-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-2">Add New Category</h6>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.category.add')}}" method="POST" enctype="multipart/form-data">
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
                            @error('name')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="categoryName">Category Name</label>
                            <input type="text" class="form-control" id="categoryName" name="name"
                                placeholder="Enter category name" required>
                        </div>
                        @error('categoryImage')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="categoryImage">Category Image</label>
                            <input type="file" class="form-control" id="categoryImage" name="categoryImage"
                                accept="image/*" required>

                        </div>
                        @error('description')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="categoryDescription">Description</label>
                            <textarea class="form-control" id="categoryDescription" name="description" rows="3"
                                placeholder="Short description"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Add Category</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Categories List -->
        <div class="col-12 mt-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">All Categories</h6>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <!-- Category Card -->
                        @forelse($categories as $category)
                        <div class="col-md-3">
                            
                            <div class="card border border-1 shadow-sm h-100" style="background-image: url('{{ asset('category_images/' . $category->product_category_photo) }}'); background-size: cover; background-position: center;">
                                <div class="card-body text-center">
                                    <h4 class="fw-bold">{{ $category->category_name }}</h4>
                                    <p class="small text-white">{{ $category->description }}</p>
                                    <a href="{{ route('admin.product_category_details', ['id' => $category->id])}}" class="btn btn-outline-primary btn-sm bg-dark text-white">View Details</a>
                                </div>
                            </div>
                        </div>
                        @empty
                        <div class="col-12">
                            <div class="alert alert-warning text-center">
                                No categories found.
                            </div>
                        </div>
                        @endforelse
                        <!-- End Category Card -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function previewImage(event) {
            const imagePreview = document.getElementById('imagePreview');
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            } else {
                imagePreview.style.display = 'none';
            }
        }
    </script>

@endsection