actor class canvalue_backend() = this {
  public type R = {
    value: canvalue_backend;
  };
  public query func test() : async R {
    return { value = this };
  };
};
