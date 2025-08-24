@extends('layouts.userlayout')


@section('content')


    <div class="row mt-4">


        <!-- Inbox List -->
        <div class="col-12 mt-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">Inbox Messages</h6>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <!-- Inbox Card -->
                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <a href="">
                                    <div class="card-body text-center">
                                        <h4 class="fw-bold">Time</h4>
                                        <h6>Message Status</h6>
                                        <p class="text-muted small">Messages......</p>
                                        <div class="d-flex">
                                            <img src="" alt="" class="img-fluid">
                                            <p>Product</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <a href="">
                                    <div class="card-body text-center">
                                        <h4 class="fw-bold">Time</h4>
                                        <h6>Message Status</h6>
                                        <p class="text-muted small">Messages......</p>
                                        <div class="d-flex">
                                            <img src="" alt="" class="img-fluid">
                                            <p>Product</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <a href="">
                                    <div class="card-body text-center">
                                        <h4 class="fw-bold">Time</h4>
                                        <h6>Message Status</h6>
                                        <p class="text-muted small">Messages......</p>
                                        <div class="d-flex">
                                            <img src="" alt="" class="img-fluid">
                                            <p>Product</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <a href="">
                                    <div class="card-body text-center">
                                        <h4 class="fw-bold">Time</h4>
                                        <h6>Message Status</h6>
                                        <p class="text-muted small">Messages......</p>
                                        <div class="d-flex">
                                            <img src="" alt="" class="img-fluid">
                                            <p>Product</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Inbox Card -->
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